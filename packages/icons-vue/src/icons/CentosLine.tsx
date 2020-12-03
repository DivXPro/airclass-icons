// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CentosLineSvg from '@airclass/icons-svg/lib/asn/CentosLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CentosLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CentosLineSvg}></AntdIcon>;
};

CentosLine.displayName = 'CentosLine';
CentosLine.inheritAttrs = false;
export default CentosLine;