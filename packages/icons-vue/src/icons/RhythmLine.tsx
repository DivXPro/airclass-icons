// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RhythmLineSvg from '@airclass/icons-svg/lib/asn/RhythmLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RhythmLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RhythmLineSvg}></AntdIcon>;
};

RhythmLine.displayName = 'RhythmLine';
RhythmLine.inheritAttrs = false;
export default RhythmLine;