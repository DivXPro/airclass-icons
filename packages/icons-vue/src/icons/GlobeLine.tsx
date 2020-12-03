// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GlobeLineSvg from '@airclass/icons-svg/lib/asn/GlobeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobeLineSvg}></AntdIcon>;
};

GlobeLine.displayName = 'GlobeLine';
GlobeLine.inheritAttrs = false;
export default GlobeLine;