import { useGetTweet } from "@/api/useGetTweet";
import TweetCard from "../tweet/tweet-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CustomIcon } from "../ui/custom-icon";
import ImageInput, { svg } from "../tweet/input/image-input";
import useTweetFormLogic from "../tweet/service/useTweetForm";
import TextareaInput from "../tweet/input/textarea-input";
import ImageComponent from "../tweet/ui/image-preview";
import { ChangeEvent, useRef } from "react";
import { AvatarProfile } from "../tweet/ui/avatar";
import { TweetFormFeed } from "./tweet-form-feed";
import FeedHeader from "./feed-header";
import FeedWrapper from "./feed-wrapper";
import MultistepForm from "../login/multistep-form";
import { useDialogStore } from "@/lib/store/dialog";
import Spinner from "../ui/spinner";
import useWindow from "@/lib/hooks/window-context";
import FeedHeaderMobile from "./feed-header-mobile";
import Timeline from "./feed-timeline";

export function Feed(): JSX.Element {
  // const { data } = useGetTweet();
  const { formik, handleFileInputChange } = useTweetFormLogic({});
  const { isDialogOpen } = useDialogStore();
  const { isMobile } = useWindow();

  return (
    <FeedWrapper>
      {isMobile && <FeedHeaderMobile />}
      <FeedHeader />
      {!isMobile && (
        <TweetFormFeed
          formik={formik}
          handleFileInputChange={handleFileInputChange}
        />
      )}
      <MultistepForm isOpen={isDialogOpen} />
      <Timeline />
    </FeedWrapper>
  );
}
