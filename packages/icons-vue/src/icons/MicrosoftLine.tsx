// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MicrosoftLineSvg from '@airclass/icons-svg/lib/asn/MicrosoftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MicrosoftLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicrosoftLineSvg}></AntdIcon>;
};

MicrosoftLine.displayName = 'MicrosoftLine';
MicrosoftLine.inheritAttrs = false;
export default MicrosoftLine;