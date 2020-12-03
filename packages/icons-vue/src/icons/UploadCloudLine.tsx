// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UploadCloudLineSvg from '@airclass/icons-svg/lib/asn/UploadCloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadCloudLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UploadCloudLineSvg}></AntdIcon>;
};

UploadCloudLine.displayName = 'UploadCloudLine';
UploadCloudLine.inheritAttrs = false;
export default UploadCloudLine;