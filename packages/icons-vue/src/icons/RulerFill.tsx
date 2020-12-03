// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RulerFillSvg from '@airclass/icons-svg/lib/asn/RulerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RulerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RulerFillSvg}></AntdIcon>;
};

RulerFill.displayName = 'RulerFill';
RulerFill.inheritAttrs = false;
export default RulerFill;