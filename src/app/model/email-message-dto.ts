export interface EmailMessageDto {
    To?: string;
    Subject?: string;
    Body?: string;
    Template?: string;
    TemplateTags?: any;
    AttachmentName?: string;
    File?: File;
    AttachmentUrl?: string;
}
