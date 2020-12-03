// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CollageFillSvg from '@airclass/icons-svg/lib/asn/CollageFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CollageFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CollageFillSvg}></AntdIcon>;
};

CollageFill.displayName = 'CollageFill';
CollageFill.inheritAttrs = false;
export default CollageFill;