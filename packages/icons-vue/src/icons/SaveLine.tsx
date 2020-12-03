// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SaveLineSvg from '@airclass/icons-svg/lib/asn/SaveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SaveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveLineSvg}></AntdIcon>;
};

SaveLine.displayName = 'SaveLine';
SaveLine.inheritAttrs = false;
export default SaveLine;