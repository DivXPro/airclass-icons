// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SdCardFillSvg from '@airclass/icons-svg/lib/asn/SdCardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SdCardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SdCardFillSvg}></AntdIcon>;
};

SdCardFill.displayName = 'SdCardFill';
SdCardFill.inheritAttrs = false;
export default SdCardFill;