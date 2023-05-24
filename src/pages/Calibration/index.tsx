import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

const Calibration: React.FC = () => {
  return (
    <PageContainer title={'相机标定'}>
      <div>
        计算机视觉的基本任务之一是从摄像机获取的图像信息出发计算三维空间中物体的几何信息，并由此重建和识别物体，而空间物体表面某点的三维几何位置与其在图像中对应点之间的相互关系是由摄像机成像的几何模型决定的，这些几何模型参数就是摄像机参数。
      </div>
    </PageContainer>
  );
};

export default Calibration;
