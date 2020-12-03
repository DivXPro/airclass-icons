// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TapeFillSvg from '@airclass/icons-svg/lib/asn/TapeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TapeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TapeFillSvg}></AntdIcon>;
};

TapeFill.displayName = 'TapeFill';
TapeFill.inheritAttrs = false;
export default TapeFill;