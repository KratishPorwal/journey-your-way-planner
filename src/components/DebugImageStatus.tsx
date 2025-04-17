
import React from 'react';
import { ImageLoadStatus } from '@/types/destination';

interface DebugImageStatusProps {
  imageLoadStatus: ImageLoadStatus;
}

const DebugImageStatus: React.FC<DebugImageStatusProps> = ({ imageLoadStatus }) => {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Image Loading Debug Info</h3>
      <pre className="text-xs overflow-auto">
        {JSON.stringify(imageLoadStatus, null, 2)}
      </pre>
    </div>
  );
};

export default DebugImageStatus;
