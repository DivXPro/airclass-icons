// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MenLineSvg from '@airclass/icons-svg/lib/asn/MenLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MenLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MenLineSvg}></AntdIcon>;
};

MenLine.displayName = 'MenLine';
MenLine.inheritAttrs = false;
export default MenLine;