// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContrastLineSvg from '@airclass/icons-svg/lib/asn/ContrastLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContrastLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContrastLineSvg}></AntdIcon>;
};

ContrastLine.displayName = 'ContrastLine';
ContrastLine.inheritAttrs = false;
export default ContrastLine;