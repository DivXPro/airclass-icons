// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InformationLineSvg from '@airclass/icons-svg/lib/asn/InformationLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InformationLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InformationLineSvg}></AntdIcon>;
};

InformationLine.displayName = 'InformationLine';
InformationLine.inheritAttrs = false;
export default InformationLine;