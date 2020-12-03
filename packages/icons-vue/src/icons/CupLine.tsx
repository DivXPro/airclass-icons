// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CupLineSvg from '@airclass/icons-svg/lib/asn/CupLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CupLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupLineSvg}></AntdIcon>;
};

CupLine.displayName = 'CupLine';
CupLine.inheritAttrs = false;
export default CupLine;