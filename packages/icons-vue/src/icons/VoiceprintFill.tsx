// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VoiceprintFillSvg from '@airclass/icons-svg/lib/asn/VoiceprintFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VoiceprintFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VoiceprintFillSvg}></AntdIcon>;
};

VoiceprintFill.displayName = 'VoiceprintFill';
VoiceprintFill.inheritAttrs = false;
export default VoiceprintFill;