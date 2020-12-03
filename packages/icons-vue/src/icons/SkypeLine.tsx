// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SkypeLineSvg from '@airclass/icons-svg/lib/asn/SkypeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkypeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SkypeLineSvg}></AntdIcon>;
};

SkypeLine.displayName = 'SkypeLine';
SkypeLine.inheritAttrs = false;
export default SkypeLine;