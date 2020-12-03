// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ContrastDropLineSvg from '@airclass/icons-svg/lib/asn/ContrastDropLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ContrastDropLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ContrastDropLineSvg}></AntdIcon>;
};

ContrastDropLine.displayName = 'ContrastDropLine';
ContrastDropLine.inheritAttrs = false;
export default ContrastDropLine;