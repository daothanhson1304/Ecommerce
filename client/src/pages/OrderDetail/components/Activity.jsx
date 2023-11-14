import ORDER_STATUS from '@common/constants/common';
import { MdOutlinePendingActions } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { IoCheckmarkDone } from 'react-icons/io5';
import { TbMessageCancel } from 'react-icons/tb';
import { AiOutlineIssuesClose } from 'react-icons/ai';
import { FaShippingFast } from 'react-icons/fa';

const ACTIVITY_CONFIG = {
  [ORDER_STATUS.PENDING]: {
    icon: MdOutlinePendingActions,
    descriptions: 'Your order awaits confirmation.',
    backgroundColor: '#D5EDFD',
    color: '#2DA5F3',
  },
  [ORDER_STATUS.PROCESSING]: {
    icon: SiProcesswire,
    descriptions: 'Your order is successfully verified.',
    backgroundColor: '#D5F0D3',
    color: '#2DB224',
  },
  [ORDER_STATUS.SHIPPED]: {
    icon: FaShippingFast,
    descriptions: 'Your order on the way to (last mile) hub.',
    backgroundColor: '#D5EDFD',
    color: '#2DA5F3',
  },
  [ORDER_STATUS.COMPLETED]: {
    icon: IoCheckmarkDone,
    descriptions:
      'Your order has been delivered. Thank you for shopping at Clicon!',
    backgroundColor: '#D5F0D3',
    color: '#2DB224',
  },
  [ORDER_STATUS.CANCELLED]: {
    icon: TbMessageCancel,
    descriptions: 'Your order has been cancelled.',
    backgroundColor: '#F8BCBC',
    color: '#EE5858',
  },
  [ORDER_STATUS.ISSUE]: {
    icon: AiOutlineIssuesClose,
    descriptions: 'Your order has an issue.',
    backgroundColor: '#F7E99E',
    color: '#EBC80C',
  },
};

export default function Activity({ activity }) {
  const revertActivity = [...activity].reverse();
  return (
    <div className="p-6 flex flex-col gap-6">
      <h3>Order Activity</h3>
      <div className="flex flex-col gap-4">
        {revertActivity.map((item) => {
          const { status, createdAt } = item;
          const Icon = ACTIVITY_CONFIG[status].icon;
          return (
            <div key={status} className="flex gap-4 items-center">
              <div
                style={{
                  backgroundColor: ACTIVITY_CONFIG[status].backgroundColor,
                  borderColor: ACTIVITY_CONFIG[status].color,
                }}
                className="rounded border-1 p-4"
              >
                {Icon ? (
                  <Icon style={{ color: ACTIVITY_CONFIG[status].color }} />
                ) : null}
              </div>
              <div>
                <p className="bg-s">{ACTIVITY_CONFIG[status].descriptions}</p>
                <p>{createdAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
