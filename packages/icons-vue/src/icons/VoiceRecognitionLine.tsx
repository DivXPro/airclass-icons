// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VoiceRecognitionLineSvg from '@airclass/icons-svg/lib/asn/VoiceRecognitionLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VoiceRecognitionLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceRecognitionLineSvg}></AntdIcon>;
};

VoiceRecognitionLine.displayName = 'VoiceRecognitionLine';
VoiceRecognitionLine.inheritAttrs = false;
export default VoiceRecognitionLine;