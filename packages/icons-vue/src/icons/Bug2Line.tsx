// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import Bug2LineSvg from '@airclass/icons-svg/lib/asn/Bug2Line';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Bug2Line = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bug2LineSvg}></AntdIcon>;
};

Bug2Line.displayName = 'Bug2Line';
Bug2Line.inheritAttrs = false;
export default Bug2Line;