// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GiftFillSvg from '@airclass/icons-svg/lib/asn/GiftFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GiftFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GiftFillSvg}></AntdIcon>;
};

GiftFill.displayName = 'GiftFill';
GiftFill.inheritAttrs = false;
export default GiftFill;