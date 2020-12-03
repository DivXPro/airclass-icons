// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileGifLineSvg from '@airclass/icons-svg/lib/asn/FileGifLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileGifLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileGifLineSvg}></AntdIcon>;
};

FileGifLine.displayName = 'FileGifLine';
FileGifLine.inheritAttrs = false;
export default FileGifLine;