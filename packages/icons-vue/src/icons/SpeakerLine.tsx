// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpeakerLineSvg from '@airclass/icons-svg/lib/asn/SpeakerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeakerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeakerLineSvg}></AntdIcon>;
};

SpeakerLine.displayName = 'SpeakerLine';
SpeakerLine.inheritAttrs = false;
export default SpeakerLine;