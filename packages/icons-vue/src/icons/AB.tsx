// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ABSvg from '@airclass/icons-svg/lib/asn/AB';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AB = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ABSvg}></AntdIcon>;
};

AB.displayName = 'AB';
AB.inheritAttrs = false;
export default AB;