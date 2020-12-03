// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FoldersLineSvg from '@airclass/icons-svg/lib/asn/FoldersLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FoldersLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FoldersLineSvg}></AntdIcon>;
};

FoldersLine.displayName = 'FoldersLine';
FoldersLine.inheritAttrs = false;
export default FoldersLine;