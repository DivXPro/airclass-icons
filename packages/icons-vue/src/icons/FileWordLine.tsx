// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileWordLineSvg from '@airclass/icons-svg/lib/asn/FileWordLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileWordLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileWordLineSvg}></AntdIcon>;
};

FileWordLine.displayName = 'FileWordLine';
FileWordLine.inheritAttrs = false;
export default FileWordLine;