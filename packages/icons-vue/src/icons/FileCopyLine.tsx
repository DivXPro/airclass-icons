// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileCopyLineSvg from '@airclass/icons-svg/lib/asn/FileCopyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileCopyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileCopyLineSvg}></AntdIcon>;
};

FileCopyLine.displayName = 'FileCopyLine';
FileCopyLine.inheritAttrs = false;
export default FileCopyLine;