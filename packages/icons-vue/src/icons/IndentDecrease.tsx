// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IndentDecreaseSvg from '@airclass/icons-svg/lib/asn/IndentDecrease';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IndentDecrease = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IndentDecreaseSvg}></AntdIcon>;
};

IndentDecrease.displayName = 'IndentDecrease';
IndentDecrease.inheritAttrs = false;
export default IndentDecrease;