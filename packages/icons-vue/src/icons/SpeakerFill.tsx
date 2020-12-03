// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SpeakerFillSvg from '@airclass/icons-svg/lib/asn/SpeakerFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SpeakerFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SpeakerFillSvg}></AntdIcon>;
};

SpeakerFill.displayName = 'SpeakerFill';
SpeakerFill.inheritAttrs = false;
export default SpeakerFill;