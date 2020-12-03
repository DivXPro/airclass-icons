// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EmphasisSvg from '@airclass/icons-svg/lib/asn/Emphasis';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Emphasis = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EmphasisSvg}></AntdIcon>;
};

Emphasis.displayName = 'Emphasis';
Emphasis.inheritAttrs = false;
export default Emphasis;