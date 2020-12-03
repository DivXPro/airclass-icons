// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MistLineSvg from '@airclass/icons-svg/lib/asn/MistLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MistLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MistLineSvg}></AntdIcon>;
};

MistLine.displayName = 'MistLine';
MistLine.inheritAttrs = false;
export default MistLine;