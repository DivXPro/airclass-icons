// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScalesLineSvg from '@airclass/icons-svg/lib/asn/ScalesLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScalesLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScalesLineSvg}></AntdIcon>;
};

ScalesLine.displayName = 'ScalesLine';
ScalesLine.inheritAttrs = false;
export default ScalesLine;