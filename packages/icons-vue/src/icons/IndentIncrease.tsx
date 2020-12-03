// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IndentIncreaseSvg from '@airclass/icons-svg/lib/asn/IndentIncrease';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IndentIncrease = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IndentIncreaseSvg}></AntdIcon>;
};

IndentIncrease.displayName = 'IndentIncrease';
IndentIncrease.inheritAttrs = false;
export default IndentIncrease;