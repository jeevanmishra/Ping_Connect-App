import { Popover } from "@headlessui/react";
const PostMenus = ({ menuIcon, elementRender,disableButton }) => {
  return (
    <Popover className="relative">
      <Popover.Button className={`${disableButton?' cursor-not-allowed':''}`} disabled={disableButton}>{menuIcon}</Popover.Button>

      <Popover.Panel className="absolute z-10">{elementRender}</Popover.Panel>
    </Popover>
  );
};

export default PostMenus;
