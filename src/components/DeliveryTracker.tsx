import React, { useState, useEffect } from 'react';
import { Order, OrderStatus } from '../types';
import { Truck, MapPin, CheckCircle, Clock, Phone, Send, Sparkles, Navigation, X, ShieldCheck, Bell } from 'lucide-react';
import { sound } from '../utils/sound';

interface DeliveryTrackerProps {
  order: Order | null;
  onClose: () => void;
  onUpdateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
}

export const DeliveryTracker: React.FC<DeliveryTrackerProps> = ({
  order,
  onClose,
  onUpdateOrderStatus,
}) => {
  if (!order) return null;

  const [progress, setProgress] = useState(15); // 0 to 100
  const [etaSeconds, setEtaSeconds] = useState(45);
  const [chatMessages, setChatMessages] = useState<{ sender: 'courier' | 'user'; text: string; time: string }[]>([
    {
      sender: 'courier',
      text: `Merhaba! Ben kuryeniz ${order.courier.name}. Paketinizi sanal depodan teslim aldım, adresinize doğru yola çıkıyorum.`,
      time: 'Şimdi'
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [logs, setLogs] = useState<{ timestamp: string; message: string }[]>([
    { timestamp: '14:00', message: 'Siparişiniz satıcı tarafından paketlendi.' },
    { timestamp: '14:01', message: `${order.courier.name} paketi teslim aldı.` }
  ]);

  // Animated courier movement timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prevProgress + 5;

        // Log triggers based on progress
        if (next === 30) {
          addLog(`${order.courier.name} E-5 karayolunda hızlıca ilerliyor.`);
          sound.playNotification();
        } else if (next === 60) {
          addLog(`Kuryeniz ${order.courier.name} trafik ışıklarından geçti, mahallenize girmek üzere.`);
          onUpdateOrderStatus(order.id, 'yolda');
          sound.playNotification();
        } else if (next === 85) {
          addLog(`Kuryeniz binanızın önüne ulaştı! Kapı numarası kontrol ediliyor.`);
          onUpdateOrderStatus(order.id, 'yaklasti');
          sound.playNotification();
        } else if (next >= 100) {
          addLog(`🎉 KAPI ZİLİ ÇALDI! Paketi sanal olarak teslim aldınız. %100 Dopamin Seviyesi!`);
          onUpdateOrderStatus(order.id, 'teslim_edildi');
          sound.playDeliveryBell();
        }

        return next;
      });

      setEtaSeconds((prev) => Math.max(0, prev - 2));
    }, 1500);

    return () => clearInterval(timer);
  }, [order.id]);

  const addLog = (msg: string) => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setLogs((prev) => [{ timestamp: timeStr, message: msg }, ...prev]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg = userInput.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: 'Şimdi' }]);
    setUserInput('');
    sound.playNotification();

    // Auto simulated reply from courier
    setTimeout(() => {
      let reply = 'Anlaşıldı! 1-2 dakikaya kapınızdayım, keyifli alışverişler!';
      if (userMsg.toLowerCase().includes('kapı') || userMsg.toLowerCase().includes('bırak')) {
        reply = 'Tamamdır kapının önüne bırakıyorum. Zile basıp geçeceğim!';
      } else if (userMsg.toLowerCase().includes('hızlı') || userMsg.toLowerCase().includes('neredesin')) {
        reply = 'Motorla ışıklardayım, son 200 metre kaldı!';
      }
      setChatMessages((prev) => [...prev, { sender: 'courier', text: reply, time: 'Şimdi' }]);
      sound.playNotification();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-xl">
              <Truck className="w-6 h-6 animate-pulse text-yellow-300" />
            </div>
            <div>
              <h2 className="font-extrabold text-base">Canlı Sanal Kurye Takip Ekranı</h2>
              <p className="text-xs text-blue-100">Sipariş No: #{order.id.slice(-6)} · {order.deliveryAddress}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-white/80 hover:text-white cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 space-y-4 flex-1">
          {/* Progress Tracker Status Bar */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-blue-900 flex items-center gap-1">
                <Navigation className="w-4 h-4 text-blue-600 animate-spin-slow" />
                Teslimat Durumu: {progress >= 100 ? '🎉 Teslim Edildi!' : 'Yolda (Kurye Yaklaşıyor)'}
              </span>
              <span className="bg-blue-600 text-white font-black px-2.5 py-0.5 rounded-full">
                {progress >= 100 ? '0 Saniye' : `Tahmini: ${etaSeconds}sn`}
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden relative">
              <div
                className="bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 h-full transition-all duration-700 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Interactive Simulated GPS Route Map Visualizer */}
          <div className="bg-slate-900 rounded-2xl p-4 text-white relative overflow-hidden min-h-[220px] flex flex-col justify-between border border-slate-700 shadow-inner">
            {/* Map Grid Pattern background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Origin & Destination Nodes */}
            <div className="relative z-10 flex justify-between items-start text-xs font-semibold">
              <div className="bg-slate-800/90 border border-slate-700 p-2 rounded-lg flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-ping" />
                <div>
                  <p className="text-gray-400 text-[10px]">ÇIKIŞ NOKTASI</p>
                  <p className="text-white font-bold">Kadıköy Sanal Depo</p>
                </div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700 p-2 rounded-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 animate-bounce" />
                <div>
                  <p className="text-gray-400 text-[10px]">TESLİMAT ADRESİ</p>
                  <p className="text-white font-bold max-w-[140px] truncate">{order.deliveryAddress}</p>
                </div>
              </div>
            </div>

            {/* Moving Courier Icon on Simulated Path */}
            <div className="relative z-10 my-6">
              <div className="w-full h-1 bg-slate-700 rounded relative">
                <div
                  className="absolute -top-4 transition-all duration-700 flex flex-col items-center"
                  style={{ left: `calc(${Math.min(92, Math.max(5, progress))}% - 16px)` }}
                >
                  <div className="bg-gradient-to-tr from-amber-500 to-orange-500 p-2 rounded-full text-white shadow-lg border-2 border-white animate-bounce">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] bg-black/80 px-1.5 py-0.5 rounded text-amber-300 font-bold whitespace-nowrap mt-1">
                    {order.courier.name.split(' ')[0]} ({Math.round(progress)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Status Text inside Map */}
            <div className="relative z-10 flex justify-between items-center text-[11px] text-slate-300">
              <span className="flex items-center gap-1 font-mono">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                CANLI GPS SİNYALİ AKTİF
              </span>
              <span className="font-bold text-amber-400">
                Plaka: {order.courier.plate}
              </span>
            </div>
          </div>

          {/* Courier Card & Live Chat Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Courier Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={order.courier.avatar}
                  alt={order.courier.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                />
                <div>
                  <h3 className="font-bold text-xs text-gray-900">{order.courier.name}</h3>
                  <p className="text-[11px] text-gray-500">
                    Araç: <strong className="uppercase">{order.courier.vehicle}</strong> · Derece: ★{order.courier.rating}
                  </p>
                  <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                    ● Telefon: {order.courier.phone}
                  </p>
                </div>
              </div>

              {/* Order Items Preview */}
              <div className="border-t border-gray-200 pt-2 space-y-1">
                <p className="text-[10px] font-bold text-gray-500 uppercase">Paket İçeriği ({order.items.length} Parça):</p>
                <div className="max-h-20 overflow-y-auto text-xs text-gray-700 space-y-1">
                  {order.items.map((it, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="truncate max-w-[180px]">{it.product.name}</span>
                      <span className="font-bold text-orange-600">x{it.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Courier Chat */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex flex-col justify-between h-56">
              <div className="text-xs font-bold text-gray-800 border-b border-gray-200 pb-1.5 flex items-center justify-between">
                <span>Kurye ile Canlı Mesajlaş</span>
                <span className="text-[10px] text-emerald-600 font-semibold">Çevrimiçi</span>
              </div>

              {/* Message Feed */}
              <div className="flex-1 overflow-y-auto my-2 space-y-2 pr-1 text-xs">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-2.5 py-1.5 text-xs ${
                        msg.sender === 'user'
                          ? 'bg-orange-500 text-white rounded-br-none'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-2xs'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className={`text-[9px] block text-right mt-0.5 ${msg.sender === 'user' ? 'text-orange-100' : 'text-gray-400'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="flex gap-1.5 pt-1">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Kuryeye not veya mesaj yazın..."
                  className="flex-1 bg-white border border-gray-300 rounded-lg px-2.5 py-1 text-xs outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white p-1.5 rounded-lg hover:bg-orange-600 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Live Delivery Logs */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs space-y-1.5 max-h-32 overflow-y-auto">
            <h4 className="font-bold text-gray-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
              <Bell className="w-3.5 h-3.5 text-orange-500" /> Canlı Kargo Hareket Akışı
            </h4>
            {logs.map((log, index) => (
              <div key={index} className="flex gap-2 text-gray-700 text-[11px] border-b border-gray-100 pb-1">
                <span className="font-mono text-gray-400 text-[10px]">{log.timestamp}</span>
                <span>{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
