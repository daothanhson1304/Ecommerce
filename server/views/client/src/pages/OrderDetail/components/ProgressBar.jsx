import { useState } from 'react';
import './index.css';
import { TiTick } from 'react-icons/ti';
import ORDER_STATUS from '@common/constants/common';
import { SlNotebook } from 'react-icons/sl';
import { LuPackage } from 'react-icons/lu';
import { FaShippingFast } from 'react-icons/fa';
import { GiShakingHands } from 'react-icons/gi';

const ICONS = [SlNotebook, LuPackage, FaShippingFast, GiShakingHands];

export default function ProgressBar({ activity }) {
  const steps = ['Order Placed', 'Packaging', 'On The Road', 'Delivered'];
  const initStep = activity ? activity.length + 1 : 2;
  const [currentStep, setCurrentStep] = useState(initStep);
  const [complete, setComplete] = useState(false);
  return (
    <div className="flex w-full">
      {steps?.map((step, i) => {
        const Icon = ICONS[i];
        return (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <div className="box text-gray-900 flex items-center flex-col">
              {Icon ? (
                <Icon style={{ color: '#FA8232', fontSize: 24 }} />
              ) : null}
              <span className="">{step}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
