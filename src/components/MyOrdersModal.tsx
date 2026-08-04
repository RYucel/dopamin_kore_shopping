import React from 'react';
import { Order } from '../types';
import { X, Truck, CheckCircle, Clock, MapPin, ExternalLink, Package } from 'lucide-react';

interface MyOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: Order[];
  onSelectOrderToTrack: (order: Order) => void;
}

export const MyOrdersModal: React.FC<MyOrdersModalProps> = ({
  isOpen,
  onClose,
  orders,
  onSelectOrderToTrack,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-5 shadow-2xl relative max-h-[90vh] flex flex-col">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 p-1 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-xl font-bold">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-base text-gray-900">Sanal Siparişlerim ({orders.length})</h2>
            <p className="text-xs text-gray-500">Geçmiş ve aktif kargo takipleriniz.</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {orders.length === 0 ? (
            <div className="text-center py-12 text-gray-400 space-y-2">
              <Truck className="w-12 h-12 mx-auto text-gray-300" />
              <p className="font-bold text-gray-600 text-sm">Henüz bir siparişiniz yok!</p>
              <p className="text-xs">Beğendiğiniz ürünleri sepete ekleyip ücretsiz sipariş oluşturun.</p>
            </div>
          ) : (
            orders.map((ord) => (
              <div key={ord.id} className="border border-gray-200 rounded-xl p-3.5 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs text-gray-900">Sipariş #{ord.id.slice(-6)}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      ord.status === 'teslim_edildi'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-800 animate-pulse'
                    }`}>
                      {ord.status === 'teslim_edildi' ? '✓ Teslim Edildi' : '🚚 Kurye Yolda'}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600">
                    Tarih: {ord.date} · Adres: <span className="font-medium">{ord.deliveryAddress}</span>
                  </p>
                  <p className="text-[11px] text-orange-600 font-bold">
                    Kurye: {ord.courier.name} ({ord.courier.vehicle.toUpperCase()}) · Ödenen: 0 TL (Tasarruf: ₺{ord.totalSaved.toLocaleString('tr-TR')})
                  </p>
                </div>

                <button
                  onClick={() => onSelectOrderToTrack(ord)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Kuryeyi Haritada İzle</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
