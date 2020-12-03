// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Medal2LineSvg from '@airclass/icons-svg/lib/asn/Medal2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Medal2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Medal2LineSvg}></AntdIcon>;
};

Medal2Line.displayName = 'Medal2Line';
Medal2Line.inheritAttrs = false;
export default Medal2Line;