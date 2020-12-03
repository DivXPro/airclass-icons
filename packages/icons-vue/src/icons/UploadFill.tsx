// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UploadFillSvg from '@airclass/icons-svg/lib/asn/UploadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UploadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UploadFillSvg}></AntdIcon>;
};

UploadFill.displayName = 'UploadFill';
UploadFill.inheritAttrs = false;
export default UploadFill;