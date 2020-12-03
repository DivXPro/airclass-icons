// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UploadCloudFillSvg from '@airclass/icons-svg/lib/asn/UploadCloudFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadCloudFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UploadCloudFillSvg}></AntdIcon>;
};

UploadCloudFill.displayName = 'UploadCloudFill';
UploadCloudFill.inheritAttrs = false;
export default UploadCloudFill;