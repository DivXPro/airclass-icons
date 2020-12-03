// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SafeLineSvg from '@airclass/icons-svg/lib/asn/SafeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeLineSvg}></AntdIcon>;
};

SafeLine.displayName = 'SafeLine';
SafeLine.inheritAttrs = false;
export default SafeLine;