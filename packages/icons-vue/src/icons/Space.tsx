// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpaceSvg from '@airclass/icons-svg/lib/asn/Space';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Space = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpaceSvg}></AntdIcon>;
};

Space.displayName = 'Space';
Space.inheritAttrs = false;
export default Space;