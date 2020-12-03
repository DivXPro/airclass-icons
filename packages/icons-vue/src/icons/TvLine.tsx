// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TvLineSvg from '@airclass/icons-svg/lib/asn/TvLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TvLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TvLineSvg}></AntdIcon>;
};

TvLine.displayName = 'TvLine';
TvLine.inheritAttrs = false;
export default TvLine;