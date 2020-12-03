// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SdCardMiniFillSvg from '@airclass/icons-svg/lib/asn/SdCardMiniFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SdCardMiniFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SdCardMiniFillSvg}></AntdIcon>;
};

SdCardMiniFill.displayName = 'SdCardMiniFill';
SdCardMiniFill.inheritAttrs = false;
export default SdCardMiniFill;