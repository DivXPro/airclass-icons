// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkypeFillSvg from '@airclass/icons-svg/lib/asn/SkypeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkypeFillSvg}></AntdIcon>;
};

SkypeFill.displayName = 'SkypeFill';
SkypeFill.inheritAttrs = false;
export default SkypeFill;