// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PinterestFillSvg from '@airclass/icons-svg/lib/asn/PinterestFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PinterestFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PinterestFillSvg}></AntdIcon>;
};

PinterestFill.displayName = 'PinterestFill';
PinterestFill.inheritAttrs = false;
export default PinterestFill;