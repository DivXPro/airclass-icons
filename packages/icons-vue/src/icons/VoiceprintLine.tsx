// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VoiceprintLineSvg from '@airclass/icons-svg/lib/asn/VoiceprintLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VoiceprintLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceprintLineSvg}></AntdIcon>;
};

VoiceprintLine.displayName = 'VoiceprintLine';
VoiceprintLine.inheritAttrs = false;
export default VoiceprintLine;