// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Key2LineSvg from '@airclass/icons-svg/lib/asn/Key2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Key2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Key2LineSvg}></AntdIcon>;
};

Key2Line.displayName = 'Key2Line';
Key2Line.inheritAttrs = false;
export default Key2Line;