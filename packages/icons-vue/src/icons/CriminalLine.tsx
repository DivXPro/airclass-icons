// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CriminalLineSvg from '@airclass/icons-svg/lib/asn/CriminalLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CriminalLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CriminalLineSvg}></AntdIcon>;
};

CriminalLine.displayName = 'CriminalLine';
CriminalLine.inheritAttrs = false;
export default CriminalLine;