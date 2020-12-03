// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OpenSourceLineSvg from '@airclass/icons-svg/lib/asn/OpenSourceLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpenSourceLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OpenSourceLineSvg}></AntdIcon>;
};

OpenSourceLine.displayName = 'OpenSourceLine';
OpenSourceLine.inheritAttrs = false;
export default OpenSourceLine;